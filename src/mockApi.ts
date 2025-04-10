import { IconEntry } from './types';
import guestbookData from './data/guestbook.json';

let icons: IconEntry[] = [...guestbookData];

export const getIcons = async (): Promise<IconEntry[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sortedIcons = [...icons].sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });
      resolve(sortedIcons);
    }, 300); // Small delay to simulate network latency
  });
};

export const postIcon = async (newIcon: IconEntry): Promise<IconEntry> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        !newIcon ||
        !newIcon.id ||
        !newIcon.componentName ||
        !newIcon.contributor ||
        !newIcon.message
      ) {
        return reject({
          status: 400,
          message: 'Missing required icon properties. Required: id, componentName, contributor, message',
        });
      }

      // Ensure the entry has a full timestamp
      if (!newIcon.date) {
        newIcon.date = new Date().toISOString();
      } else if (!newIcon.date.includes('T')) {
        // Convert YYYY-MM-DD to full ISO timestamp
        newIcon.date = new Date(newIcon.date).toISOString();
      }

      const isDuplicate = icons.some(
        (icon) => icon.id === newIcon.id || icon.componentName === newIcon.componentName
      );

      if (isDuplicate) {
        return reject({
          status: 409,
          message: 'An icon with this id or componentName already exists. Icon names must be unique.',
        });
      }

      icons.push(newIcon);

      // Sort entries by date in descending order
      icons.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });

      resolve(newIcon);
    }, 300); // Small delay to simulate network latency
  });
};
