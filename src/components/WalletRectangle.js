import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from './Touchable';

class WalletRectangle extends Component {
	render() {
		return (
			<Touchable style={styles.wrapper} onPress={this.props.onPress}>
				<Text style={styles.text}>{this.props.text}</Text>
				<AntDesign name={this.props.icon} color={'#000'} size={32} />
			</Touchable>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderWidth: 2.5,
		borderColor: '#00AFB2',
		borderRadius: 5,
		width: 100,
		height: 50,
		paddingLeft: 12,
		paddingRight: 12,
	},
	text: {
		fontSize: 16,
		fontWeight: '700',
		color: '#000',
	},
})

export default WalletRectangle