import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';
import actions from '../../redux/actions';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames={s}>
          <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
const findContact = (contacts, filter) => {
    const normalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalize),
    );
  };
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: findContact(items, filter),
});
const mapDispatchToProps = dispatch => ({
  deleteContact: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
