import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
        this.state = {
            options: [],
            selectedOption: undefined
        };
    }

    componentDidMount() {
        //console.log('component did mount! fetching data');
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log('component did update saving data');
        if (prevState.options.length !== this.state.options.length) {
                const json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    handleClearSelectedOption(){
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteOptions(){
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
           options: prevState.options.filter((option) => {
            return optionToRemove !== option;
           })
        }));
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist!';
        }

        this.setState ((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    }

    render() {
        const subtitle = 'Put your life in hands of a computer.';

        return (
        <div>
            <Header 
                subtitle={subtitle}
            />
            <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}
            />
            <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
                handleAddOption={this.handleAddOption}
            />
            <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
            />
        </div>
        );
    }
};

// IndecisionApp.defaultProps = {
//     options: []
// }