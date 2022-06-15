import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    maxWidth: '500px',
    minWidth: '500px',
    margin: 'auto',
  },
  input: {
    width: '100%',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#495057',
    border: '1px solid #ced4da',
    paddingVertical: '0.375rem',
    paddingHorizontal: '0.75rem',
  },
  button: {
    paddingHorizontal: '0.75rem',
    paddingVertical: '0.375rem',
    borderRadius: '0.25rem',
    textAlign: 'center',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    marginLeft: '10px',
  },
  textButton: {
    color: '#fff',
    fontSize: '1rem',
    lineHeight: '1.5',
    fontWeight: '400',
  },
  div: {
    flexDirection: 'row',
    width: '100%',
  },
  text:{
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    textAlign: 'left',
  }
});
