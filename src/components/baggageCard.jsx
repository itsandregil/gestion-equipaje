import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react';
import luggageLogo from '../assets/luggage.svg';
import useForm from '../hooks/useForm';


function BaggageCard({ title }) {
  const {
    formState,
    onInputChange,
    onResetForm,
    weight,
    luggage_type,
    width,
    height,
    length,
    description,
    user_id,
    flight_id,
    booking_id,
    placement_area_id
  } = useForm({
    description: "Maleta",
    weight: 4,
    luggage_type: "De mano",
    width: 10,
    height: 10,
    length: 10,
    desciption: "Equipaje",
    user_id: 1,
    flight_id: 1,
    booking_id: 1,
    placement_area_id: 1
  });

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const sendData = async (formData) => {
    try {
      const response = await fetch('http://localhost:8080/sitas/v1/luggage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Hubo un problema al enviar los datos.');
      }
  
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
    } catch (error) {
      console.error('Error al enviar los datos:', error.message);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault()
    await sendData(formState)
    console.log(formState)
  }
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-cyan-500 px-6 py-10 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      <div className="text-center mb-4">
          <img src={luggageLogo} alt="Luggage" className="mx-auto h-32 w-32 mb-2"/>
          <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
      <div className="text-center">
        <button
          onClick={handleOpen}
          type="button"
          className="text-cyan-500 border-2 border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-100">
          Agregar Equipaje
        </button>
      </div>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Width"
              type="number"
              step="0.01"
              name="width"
              value={width}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Height"
              type="number"
              step="0.01"
              name="height"
              value={height}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Length"
              type="number"
              step="0.01"
              name="length"
              value={length}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Weight"
              type="number"
              step="0.01"
              name="weight"
              value={weight}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              type="text"
              name="description"
              value={description}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Luggage Type"
              type="text"
              name="luggageType"
              value={luggage_type}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="User ID"
              type="number"
              name="userId"
              value={user_id}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Flight ID"
              type="number"
              name="flightId"
              value={flight_id}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Booking ID"
              type="number"
              name="bookingId"
              value={booking_id}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Placement Area ID"
              type="number"
              name="placementAreaId"
              value={placement_area_id}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Guardar
            </Button>
          </Grid>
        </Grid>
        </form>
      </Box>
      </Modal>
    </div>
  );
}

export default BaggageCard;
