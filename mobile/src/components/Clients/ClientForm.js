import React from 'react';
import './ClientForm.css';
import CompanyEvent from "../EE";

class ClientForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.firstNameRef = React.createRef();
        this.middleNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.balanceRef = React.createRef();
    }

    save = () => {
        const lastName = this.lastNameRef.current.value;
        const firstName = this.firstNameRef.current.value;
        const middleName = this.middleNameRef.current.value;
        const balance = Number(this.balanceRef.current.value);

        if (
            lastName === this.props.client.lastName &&
            firstName === this.props.client.firstName &&
            middleName === this.props.client.middleName &&
            balance === this.props.client.balance
        ) {
            this.cancel();
        } else {
            const data = {
                ...this.props.client,
                lastName: (lastName === '') ? 'unnamed' : lastName,
                firstName: (firstName === '') ? 'unnamed' : firstName,
                middleName: (middleName === '') ? 'unnamed' : middleName,
                balance: (balance) ? -10 : balance,
                status: (balance <= 0) ? 'blocked' : 'active'
            };
            CompanyEvent.emit('save', data);
        }
    }

    cancel = () => CompanyEvent.emit('cancel');

    render() {
        const {balance, middleName, lastName, firstName, status} = this.props.client;
        console.log(`Form with client ${firstName} render`);

        return (
            <div key={this.props.client.id} className='client_form'>
                <div className='client_form_group'>
                    <label htmlFor='lastName'>Фамилия:</label>
                    <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        defaultValue={lastName}
                        ref={this.lastNameRef}
                    />
                </div>
                <div className='client_form_group'>
                    <label htmlFor='firstName'>Имя:</label>
                    <input
                        type='text'
                        name='firstName'
                        id='name'
                        defaultValue={firstName}
                        ref={this.firstNameRef}
                    />
                </div>
                <div className='client_form_group'>
                    <label htmlFor='middleName'>Отчество:</label>
                    <input
                        type='text'
                        name='middleName'
                        id='middleName'
                        defaultValue={middleName}
                        ref={this.middleNameRef}
                    />
                </div>
                <div className='client_form_group'>
                    <label htmlFor='balance'>Баланс:</label>
                    <input
                        type='number'
                        name='balance'
                        id='balance'
                        defaultValue={balance}
                        ref={this.balanceRef}
                    />
                </div>
                <div className='client_form_group'>
                    <label htmlFor='status'>Статус:</label>
                    <input
                        type='text'
                        name='status'
                        id='status'
                        disabled
                        defaultValue={status}
                    />
                </div>
                <div className='client_form_group'>
                    <button className='button_save' type='button' onClick={this.save}>Сохранить</button>
                    <button className='button_cancel' type='button' onClick={this.cancel}>Отмена</button>
                </div>
            </div>
        );
    }
}

export default ClientForm;