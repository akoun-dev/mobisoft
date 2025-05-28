/**
 * Utility function to merge class names
 * @param inputs Class names to merge
 * @returns Merged class names string
 */
export function cn(...inputs: (string | undefined | false)[]) {
  return inputs.filter(Boolean).join(' ');
}

// Autres utilitaires peuvent être ajoutés ici au besoin
