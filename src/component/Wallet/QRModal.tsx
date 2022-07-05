import React from 'react';
interface IProps {
  children?: JSX.Element;
  hideModal: () => void;
  visible: boolean;
  title?: string;
}
export default function QRModal({children, hideModal, visible, title}: IProps) {
  const containerStyle = {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 13,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  };
  return <div>QRModal</div>;
}
