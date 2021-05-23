import React from 'react';
import './Client.css';
import CompanyEvent from "../EE";

class Client extends React.PureComponent {
    handlerEdit = () => CompanyEvent.emit('edit', this.props.client);

    handleDelete = () => CompanyEvent.emit('delete', this.props.client.id);

    render() {
        console.log(`${this.props.client.id} render`);
        const {id, lastName, firstName, middleName, balance, status} = this.props.client;

        return (
            <tr key={id}>
                <td>{lastName}</td>
                <td>{firstName}</td>
                <td>{middleName}</td>
                <td>{balance}</td>
                <td style={{backgroundColor: (status === 'active') ? 'green' : 'red'}}>{status}</td>
                <td><input type='button' value='Редактировать' onClick={this.handlerEdit}/></td>
                <td><input type='button' value='Удалить' onClick={this.handleDelete}/></td>
            </tr>
        )
    }
}

export default Client;