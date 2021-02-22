import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import s from './Filter.module.css';
import PropTypes from 'prop-types';


const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    Find contacts by name
    <input className={s.input} type="text" value={value} onChange={onChange} />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
