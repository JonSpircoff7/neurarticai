import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles({
  card: {
    margin: 'auto',
    marginTop: '50px',
    maxWidth: 600,
    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px'
  },
  title: {
    textAlign: 'center',
    margin: '10px',
  },
  subtitle: {
    textAlign: 'center',
    margin: '10px',
  },
  form: {
    width: '100%',
    marginTop: '10px',
    textAlign: 'center', // center align the button
    '& .MuiFormControl-root': {
      width: '100%',
      marginBottom: '10px',
    },
  },
  submit: {
    marginTop: '20px',
  },
});


const Contact = () => {
  const classes = useStyles();
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      duration: 1,
      y: 25,
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top bottom-=200',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Card className={classes.card} ref={formRef}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Contact Me
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Get in Touch
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={6}
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={message}
            onChange={handleMessageChange}
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send Message
          </Button>
          </form>
          </CardContent>
          </Card>
          );
          };
          
          export default Contact;
