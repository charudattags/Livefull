import { userEvent } from '@testing-library/react-native';
import { renderRouter, screen } from 'expo-router/testing-library';

import { en } from '@/i18n/en';

const labels = [en.tabs.today, en.tabs.plan, en.tabs.life, en.tabs.coach, en.tabs.me];

describe('tab shell', () => {
  it('shows the five tabs and opens each placeholder', async () => {
    await renderRouter('./app', { initialUrl: '/' });

    for (const label of labels) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }

    const user = userEvent.setup();
    for (const label of labels) {
      await user.press(screen.getAllByText(label)[0]!);
      // The placeholder screen repeats the tab name as its heading.
      expect(screen.getAllByText(label).length).toBeGreaterThan(1);
      expect(screen.getByText(en.placeholder.body)).toBeTruthy();
    }
  });
});
