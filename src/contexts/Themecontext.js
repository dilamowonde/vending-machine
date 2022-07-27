import React, { createContext, Component } from "react";

import Vending from '../vendingmachine'

export const ThemeContext = createContext();

export default class ThemeProvider extends Component {
    constructor(props){
        super(props)
        this.state = {isDarkMode: true}
    }
    render() {
        return (
        <ThemeContext.Provider value={{...this.state,name:"dilamo"}}>
            <Vending/>
        </ThemeContext.Provider>
        );
    }
}
