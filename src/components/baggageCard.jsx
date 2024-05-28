import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useForm from '../hooks/useForm';


function BaggageCard({ title, logo, luggageDescription, sizes, extra, luggageType }) {
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
    weight: 0,
    luggage_type: luggageType,
    width: 0,
    height: 0,
    length: 0,
    description: "",
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
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tu equipaje ha sido guardado con exito!",
          showConfirmButton: false,
          timer: 2000
        });
      }

      const data = await response.json();
      console.log('Respuesta del servidor:', data);
    } catch (error) {
      console.error('Error al enviar los datos:', error.message);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendData(formState);
    setOpen(false);
    onResetForm();
  }

  return (
    <>
      <button
        className="group-options_item group-options-cards_item p-4 mb-4 border border-gray-200 rounded-lg shadow-lg flex text-left w-full hover:bg-gray-100 transition-colors duration-200"
        onClick={handleOpen}
      >
        <img src={logo} className="w-32 h-32 mr-4 object-cover" />
        <div className="group-options-link flex-1">
          <h3 className="group-options-link_title text-lg font-bold mb-2">
            <span className="title_label">{title}</span>
          </h3>
          <div className="group-options-link_description text-gray-700">
            <p>{luggageDescription}</p>
            <ul className="mt-2 list-disc list-inside">
              <li className="mt-1">
                <span>{sizes}</span>
              </li>
              <li className="mt-1">
                <span>{extra}</span>
              </li>
            </ul>
          </div>
        </div>
      </button>
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
                <Button type="submit" variant="contained" color="primary">
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default BaggageCard;
