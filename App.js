
import { Text, View, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import ModalApp from './components/Modal';

const data = [
  {id: 1, name: 'Juan'},
  {id: 2, name: 'Pedro'}, 
  {id: 3, name: 'Maria'},
  {id: 4, name: 'Juana'},
  {id: 5, name: 'Lucia'},
];

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState(data);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const addItem = () => setItemList([...itemList, {id: Math.random(), name: textItem}])

  const onHandlerDelete = () => {
    setItemList(itemList.filter(item => {
      return item.id !== itemSelected.id
    }));
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <TextInput style={styles.input} onChangeText={text => setTextItem(text)}/>
        <TouchableOpacity style={styles.button} onPress={addItem}><Text style={styles.textButton}>+</Text></TouchableOpacity>
      </View>

      <FlatList
        data={itemList}
        renderItem={ ({item}) =>
          <TouchableOpacity onPress={() => {
            setItemSelected(item); 
            setModalVisible(true);
          }}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
      <ModalApp modalVisible={modalVisible} setModalVisible={() => setModalVisible(false)} onHandlerDelete = {onHandlerDelete}/>
    </View>
  );
}