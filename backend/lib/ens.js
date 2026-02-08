/**
 * ENS utility module — name normalization, validation, and service helpers.
 *
 * ENS supports many TLDs beyond .eth (e.g. .xyz, .com, .art via DNS integration,
 * and subdomains like sub.name.eth). This module provides proper name handling
 * using ethers.js UTS-46 normalization (ENSIP-15 / ensNormalize).
 */
const { ethers } = require('ethers');

/**
 * Normalize an ENS name using UTS-46 normalization (ENSIP-15).
 * Returns the normalized name, or null if the name is invalid.
 *
 * @param {string} name - The ENS name to normalize (e.g. "Vitalik.eth")
 * @returns {string|null} Normalized name or null if invalid
 */
function normalizeName(name) {
  if (!name || typeof name !== 'string') return null;
  try {
    return ethers.ensNormalize(name);
  } catch {
    return null;
  }
}

/**
 * Validate an ENS name. Must:
 *  1. Be a non-empty string
 *  2. Contain at least one dot (TLD required)
 *  3. Pass UTS-46 normalization
 *
 * @param {string} name
 * @returns {{ valid: boolean, normalized: string|null, error: string|null }}
 */
function validateName(name) {
  if (!name || typeof name !== 'string') {
    return { valid: false, normalized: null, error: 'ENS name is required' };
  }

  if (!name.includes('.')) {
    return { valid: false, normalized: null, error: 'ENS name must include a TLD (e.g. .eth)' };
  }

  const normalized = normalizeName(name);
  if (!normalized) {
    return {
      valid: false,
      normalized: null,
      error: `Invalid ENS name "${name}". Name contains disallowed characters or fails normalization.`,
    };
  }

  return { valid: true, normalized, error: null };
}

/**
 * Validate an Ethereum address.
 *
 * @param {string} address
 * @returns {{ valid: boolean, error: string|null }}
 */
function validateAddress(address) {
  if (!address || typeof address !== 'string') {
    return { valid: false, error: 'Ethereum address is required' };
  }
  if (!ethers.isAddress(address)) {
    return { valid: false, error: 'Invalid Ethereum address' };
  }
  return { valid: true, error: null };
}

/**
 * Standard text record keys used in ENS profiles.
 * Includes both legacy short keys and the newer namespaced convention.
 */
const STANDARD_TEXT_KEYS = [
  // Identity & profile
  'url',
  'email',
  'description',
  'name',
  'notice',
  'keywords',
  'location',
  // Legacy social keys (still widely used)
  'avatar',
  'twitter',
  'github',
  // Namespaced social keys (ENSIP-5 / newer convention)
  'com.twitter',
  'com.github',
  'com.discord',
  'org.telegram',
  'io.keybase',
];

/**
 * Comprehensive text record keys — includes STANDARD_TEXT_KEYS plus
 * additional commonly used records for deep profile enrichment.
 */
const EXTENDED_TEXT_KEYS = [
  ...STANDARD_TEXT_KEYS,
  'eth.ens.delegate',
  'header',
  'display',
  'mail',
  'snapshot',
  'contenthash',
  'vnd.twitter',
  'vnd.github',
];

module.exports = {
  normalizeName,
  validateName,
  validateAddress,
  STANDARD_TEXT_KEYS,
  EXTENDED_TEXT_KEYS,
};
