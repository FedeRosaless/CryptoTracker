import {Modal, TouchableOpacity, Alert} from 'react-native';
import {useState} from 'react';
import {CryptoInput, AddText, BackText, ButtonText, Touchable} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {getCrypto} from '../../store/actions';

const AddCrypto = () => {
  const [text, setText] = useState('');
  const {navigate} = useNavigation();
  const [focused, setFocused] = useState(false);

  const handleBlurInput = () => {
    setFocused(false);
  };

  const handleFocusInput = () => {
    setFocused(true);
  };

  const {
    selectedCrypto: {cryptos},
  } = useSelector((state: RootState) => state);

  // const crypto = useSelector(
  //   ({selectedCrypto: {cryptos}}: RootState) => cryptos,
  // );

  const dispatch = useDispatch<AppDispatch>();

  const findDuplicate = () =>
    cryptos.find(
      e =>
        e.name.toLowerCase() === text.toLowerCase() ||
        e.symbol.toLowerCase() === text.toLowerCase(),
    );

  const handleCrypto = () => {
    try {
      if (findDuplicate()) {
        Alert.alert('Error', 'Crypto already displayed');
      } else {
        dispatch(getCrypto(text));
        setText('');
        navigate('CryptoList');
      }
    } catch (err) {
      return err;
    }
  };

  return (
    <Modal animationType="fade">
      <TouchableOpacity onPress={() => navigate('CryptoList')}>
        <BackText>&lt; Back to list</BackText>
      </TouchableOpacity>
      <AddText>Add a Cryptocurrency</AddText>
      <CryptoInput
        theme_focus={focused}
        onChangeText={setText}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        placeholder="Use a name or ticker symbol..."
      />
      <Touchable onPress={handleCrypto} disabled={text.length < 1}>
        <ButtonText>Add</ButtonText>
      </Touchable>
    </Modal>
  );
};

export default AddCrypto;
