import React from 'react';
import './Company.css';
import Client from "../Clients/Client";
import CompanyEvent from "../EE";
import ClientForm from "../Clients/ClientForm";

class Company extends React.PureComponent {
    state = {
        clients: this.props.clients,
        name: this.props.name,
        status: 'all',
        form: null,
        client: {}
    }

    componentDidMount = () => {
        CompanyEvent.addListener('edit', this.handleEdit);
        CompanyEvent.addListener('delete', this.handleDelete);
        CompanyEvent.addListener('save', this.handleSave);
        CompanyEvent.addListener('cancel', this.handleCancel);
    }

    handleEdit = (client) => this.setState({form: 'edit', client: client});

    handleDelete = (id) => this.setState({clients: this.state.clients.filter(client => client.id !== id), form: null});

    handleSave = (data) => {
        if (this.state.form === 'add') {
            data.id = this.getMaxId();
            const newClients = [...this.state.clients, data];
            this.setState({clients: newClients, form: null});
        } else {
            const editedClients = this.state.clients.map(client => (client.id === data.id) ? data : client);
            this.setState({clients: editedClients, form: null, client: {}});
        }
    }

    getMaxId = () => {
        let max = 0;
        this.state.clients.forEach(item => (item.id >= max) ? max = item.id : null);
        return max += 1;
    }

    handleCancel = () => this.setState({form: null, client: {}});

    handleSetCompany = (name) => this.setState({name});

    handleSetStatus = (status) => this.setState({status});

    getClients = () => {
        if (this.state.status === 'all') {
            return this.state.clients.map(client => <Client key={client.id} client={client}/>);
        }
        return this.state.clients.map(client => {
            return (this.state.status === client.status) ? <Client key={client.id} client={client}/> : null;
        });
    }

    render() {
        console.log(`Company ${this.state.name} render`);

        return (
            <div>
                <div>
                    <input type='button' value='Velcom' onClick={() => this.handleSetCompany('Velcom')}/>
                    <input type='button' value='MTC' onClick={() => this.handleSetCompany('MTC')}/>
                    <h2>Компания: {this.state.name}</h2>
                </div>
                <div className='filter'>
                    <input type='button' value='Все' onClick={() => this.handleSetStatus('all')}/>
                    <input  type='button' value='Активные' onClick={() => this.handleSetStatus('active')}/>
                    <input  type='button' value='Заблокированные' onClick={() => this.handleSetStatus('blocked')}/>
                </div>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th>Баланс</th>
                            <th>Статус</th>
                            <th>Редактировать</th>
                            <th>Удалить</th>
                        </tr>
                        {this.getClients()}
                        </tbody>
                    </table>
                </div>
                <input type='button' value='Добавить' onClick={() => this.setState({form: 'add', client: {}})}/>
                <div>
                    {this.state.form && <ClientForm client={this.state.client}/>}
                </div>
            </div>
        );
    }

}

export default Company;