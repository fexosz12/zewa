
 // xpSystem.js

import { wrapServiceBoundary } from '../../utils/errorHandler.js';

// Completely disable XP and level-up notifications.
export const addXp = wrapServiceBoundary(
  async function addXp() {
    return null;
  },
  {
    service: 'xpSystem',
    operation: 'addXp',
    userMessage: 'Failed to award XP. Please try again.',
  }
);
