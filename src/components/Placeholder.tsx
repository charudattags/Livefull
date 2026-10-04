import { Text, View } from 'react-native';

import { en } from '@/i18n/en';

type PlaceholderProps = { title: string };

export function Placeholder({ title }: PlaceholderProps) {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-neutral-50 px-6 dark:bg-neutral-950">
      <Text className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50">{title}</Text>
      <Text className="text-center text-base text-neutral-600 dark:text-neutral-300">
        {en.placeholder.body}
      </Text>
    </View>
  );
}
