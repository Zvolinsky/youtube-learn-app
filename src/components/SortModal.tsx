import { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { SortOption } from '@/types/types';
import { colors } from '@/tokens/colors';

interface SortModalProps {
  visible: boolean;
  onClose: () => void;
  onSortSelect: (sortOption: SortOption) => void;
  currentSort: SortOption;
}

const sortOptions = [
  { label: 'Upload date: latest', value: 'date' },
  { label: 'Most popular', value: 'viewCount' },
  { label: 'Relevance', value: 'relevance' },
];

const SortModal: React.FC<SortModalProps> = ({ visible, onClose, onSortSelect, currentSort }) => {
  const [selectedSort, setSelectedSort] = useState<SortOption>(currentSort);

  const handleSelect = (value: SortOption) => {
    setSelectedSort(value);
  };

  const handleConfirm = () => {
    onSortSelect(selectedSort);
    onClose();
  };
  const RadioButton = (props) => {
    return (
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: colors.accent,
            alignItems: 'center',
            justifyContent: 'center',
          },
          props.style,
        ]}
      >
        {props.selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: colors.primary,
            }}
          />
        ) : null}
      </View>
    );
  };
  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-secondary rounded-3xl p-8 h-1/2 w-5/6">
          <Text className="text-lg font-bold text-accent  mb-4">Sort records by:</Text>
          {sortOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              className="py-3 flex-row gap-7"
              onPress={() => handleSelect(option.value as SortOption)}
              accessibilityRole="button"
              accessibilityLabel={option.label}
            >
              <RadioButton selected={selectedSort === option.value} style={{ marginBottom: 8 }} />
              <Text className="text-base text-accent ">{option.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            className="bg-primary py-3 px-6 rounded-md mt-4 self-center w-11/12 items-center absolute bottom-12"
            onPress={handleConfirm}
          >
            <Text className="text-accent font-bold">Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SortModal;
