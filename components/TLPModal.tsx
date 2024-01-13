import {useState} from 'react';
import { 
    Alert, 
    Modal, 
    StyleSheet, 
    Text, 
    Pressable, 
    View, 
    Image, 
    ImageProps,
    ModalBaseProps} from 'react-native';

type modalprops = {
    animationType: ModalBaseProps['animationType'],
    visible: ModalBaseProps['visible'],
    onRequestClose: ModalBaseProps['onRequestClose'],
    transparent: ModalBaseProps['transparent'],
    modalImage: string,
    modalText: string,
}

export default function TLPModal (modalProps: modalprops): JSX.Element {
  const {
    animationType = modalProps.animationType,
    visible = modalProps.visible,
    onRequestClose = modalProps.onRequestClose,
    transparent = modalProps.transparent,
    modalImage = modalProps.modalImage,
    modalText = modalProps.modalText,

  } = modalProps;

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <Modal
    style={styles.modalContainer}
    animationType = {animationType}
    visible = {visible}
    onRequestClose = {onRequestClose => setModalVisible(!modalVisible)}
    transparent = {transparent}
    >
    </Modal>
    
  )
};

const ModalHeader = ({title}:{title:string}) => {
  <View style={styles.modalHeader}>
    <Text style={styles.modalText}>{title}</Text>
  </View>  
}

const ModalImage = ({image}:{image?:ImageProps}) => {
    <Image source={require('../assets/images/favicon.png')} />
}

const ModalText = ({text}:{text:string}) => {
    <View style={styles.modalTextContainer}><Text style={styles.modalText}>{text}</Text></View>

}

const ModalBody = ({children}:{children?:React.ReactNode}) => {
    <View style={styles.modalBody}>{children}</View>

}
const ModalFooter = ({children}:{children?:React.ReactNode}) => {
    <View style={styles.modalFooter}>{children}</View>

}

const styles = {
    modalContainer: {},
    modalHeader: {},
    modalImage: {},
    modalTextContainer: {},
    modalText: {},
    modalBody: {},
    modalFooter: {},
}
