import { Modal, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { styles } from '../styles';

const ModalApp = ({modalVisible, setModalVisible, onHandlerDelete}) => {
  return (
    <Modal visible={modalVisible}>
        <View style={style.modalContainer}>
            <View style={style.modalView}>
                <Text style={style.textModal}>¿Está seguro que desea borrar?</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={style.close}><Text>X</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {onHandlerDelete(); setModalVisible(false)} } style={styles.button}><Text style={styles.textButton}>Borrar</Text></TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

export default ModalApp;

const style = StyleSheet.create({
    modalContainer: {
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView:{
        backgroundColor: 'white',
        padding: 30,
        maxWidth: 700,
        position: 'relative',
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    textModal: {
        margin: 30,
    }
})