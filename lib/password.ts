import bcrypt from "bcryptjs";

/**
 * Hashes a password with a salt.
 *
 * @param {string} password - The password to be hashed.
 * @returns {string} - The hashed password.
 */
export const saltAndHashPassword = (password: string): string => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

/**
 * Compares a plaintext password with a hashed password.
 *
 * @param {string} password - The plaintext password to compare.
 * @param {string} hash - The hashed password to compare against.
 * @returns {boolean} - Returns true if the passwords match, false otherwise.
 */
export const comparePassword = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash);
};
