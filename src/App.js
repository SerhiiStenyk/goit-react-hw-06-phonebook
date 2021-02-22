import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';
import { connect } from 'react-redux';

const App = ({ contacts }) => (
  <div>
    <CSSTransition
      in={true}
      appear={true}
      classNames={styles}
      timeout={1000}
      unmountOnExit
    >
      <h1 className={styles.title}>Phonebook</h1>
    </CSSTransition>
        
    <ContactForm />
    
    <CSSTransition
      in={contacts.length > 1}
      classNames={styles}
      timeout={250}
      unmountOnExit
    >
      <Filter />
    </CSSTransition>

    <CSSTransition
      in={contacts.length > 0}
      classNames={styles}
      timeout={250}
      unmountOnExit
    >
      <ContactList />
    </CSSTransition>
  </div>
);
const mapStateToProps = state => ({
  contacts: state.contacts.items
});
export default connect(mapStateToProps)(App);
