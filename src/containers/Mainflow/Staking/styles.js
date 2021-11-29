import styled from 'styled-components';
export const Container = styled.ScrollView`
  padding-top: 22px;
`;
export const TopContainer = styled.View`
  flex-direction: row;
  padding-horizontal: 15px;
  align-items: center;
`;
export const Input = styled.TextInput`
  //width: 100%;
  flex: 1;
  //padding-left: 22px;
  padding: 0 0 0 12px;
  color: #000000;
`;
export const Button = styled.TouchableOpacity`
  height: 35px;
  width: 79px;
  background-color: #fd7f36;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 53px;
  margin-left: 8px;
`;
export const Sum = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
export const TextInputContainer = styled.View`
  border: 0.8px solid #c4c4c4;
  border-radius: 5px;
  flex-direction: row;
  flex: 1;
  align-items: center;
  height: 35px;
`;
export const TouchImage = styled.Image`
  height: 16px;
  width: 71px;
  margin-right: 15px;
`;
export const Information = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #555555;
  margin-left: 20px;
  margin-top: 8px;
`;
export const TableContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 41px;
  padding: 0 10px;
`;
export const BottomContainer = styled.View`
  padding: 0px 24px;
`;
export const Division = styled.View`
  background-color: #fd7f36;
  height: 100%;
  width: 7px;
  margin-right: 14px;
`;

export const TitleContainer = styled.View`
  height: 35px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: #000000; ;
`;
export const Subtitle = styled.Text`
  font-size: 15px;
  color: #000000;
  margin-left: 7px;
  line-height: 17px;
`;
export const CalendarInformation = styled.Text`
  text-align: center;
  padding: 8px 0px;
  font-size: 12px;
  font-weight: ${props => (props.total || props.bold ? 'bold' : 'normal')};
  color: ${props => (props.color ? '#FD7F36' : '#000000')};
`;

export const JoinBtn = styled.TouchableOpacity`
  height: 53px;
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 53px;
  background: #fd7f36;
  justify-content: center;
  align-items: center;
`;
export const Join = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
`;
export const Warning = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #fd7f36;
  margin-top: 68px;
  margin-bottom: 14px;
  text-align: center;
`;
