import DeleteIcon from '@mui/icons-material/Delete';
import {
    Box, IconButton, Modal, Paper, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import Swal from 'sweetalert2';
import '../index.css';
import BaggageTable from './baggageTable';


function BaggageOptionsSection() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        zIndex: 1500
    };

    const [luggages, setLuggages] = useState([]);
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedLuggage, setSelectedLuggage] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEditOpen = (luggage, index) => {
        setSelectedLuggage(luggage);
        setEditIndex(index);
        setEditOpen(true);
    };
    const handleEditClose = () => {
        setEditOpen(false);
        setSelectedLuggage(null);
        setEditIndex(null);
    };

    const getLuggages = async () => {
        try {
            const response = await fetch("http://localhost:8080/sitas/v1/luggage");

            if (!response.ok) {
                throw new Error('Hubo un problema al consultar los datos.');
            }

            const data = await response.json();
            console.log('Datos consultados:', data);
            setLuggages([...data]);
        } catch (error) {
            console.error('Error al consultar los datos:', error.message);
            return null;
        }
    };

    const deleteLuggage = async (index, id) => {
        try {
            await fetch(`http://localhost:8080/sitas/v1/luggage/${id}`, {
                method: 'DELETE'
            });

            setLuggages(prevLuggages => prevLuggages.filter((_, i) => i !== index));

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Se ha eliminado el equipaje con exito",
                showConfirmButton: false,
                timer: 2000,
                customClass: {
                    container: 'my-swal-container'
                }
            });

        } catch (error) {
            console.error('Error al eliminar el equipaje:', error.message);
        }
    };

    const updateLuggage = async (updatedLuggage, index) => {
        try {
            await fetch(`http://localhost:8080/sitas/v1/luggage/${updatedLuggage.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedLuggage)
            });

            setLuggages(prevLuggages =>
                prevLuggages.map((luggage, i) => i === index ? updatedLuggage : luggage)
            );
            handleEditClose();

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Se ha eliminado el equipaje con exito",
                showConfirmButton: false,
                timer: 2000,
                customClass: {
                    container: 'my-swal-container'
                }
            });

        } catch (error) {
            console.error('Error al actualizar el equipaje:', error.message);
        }
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setSelectedLuggage({ ...selectedLuggage, [name]: value });
    };

    useEffect(() => {
        getLuggages();
    }, []);

    return (
        <div className="flex justify-center mt-28">
            <div className="mx-auto max-w-screen-lg">
                <h2 className="text-3xl text-cyan-500 mb-4"><b>Reserva: </b>12344321</h2>
                <h2 className="text-2xl text-cyan-500 mb-4"><b>Pasajero: </b>Daniel Tabares</h2>
                <p className="text-gray-500 text-xl mb-4">
                    Ten en cuenta nuestras políticas para equipaje, peso, dimensiones, equipaje especial, entre otros.
                </p>
                <BaggageTable />
                <div className='flex justify-center mb-8 mt-8'>
                    <Button variant='contained' onClick={handleOpen}>Ver todo mi equipaje</Button>
                </div>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <div>
                            {luggages.length > 0 ? (
                                <TableContainer component={Paper} sx={{ maxHeight: 400, overflow: 'auto' }}>
                                    <Table stickyHeader>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Anchura</TableCell>
                                                <TableCell>Altura</TableCell>
                                                <TableCell>Longitud</TableCell>
                                                <TableCell>Peso</TableCell>
                                                <TableCell>Descripción</TableCell>
                                                <TableCell>Tipo de Equipaje</TableCell>
                                                <TableCell>Editar</TableCell>
                                                <TableCell>Eliminar</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {luggages.map((luggage, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{luggage.width}</TableCell>
                                                    <TableCell>{luggage.height}</TableCell>
                                                    <TableCell>{luggage.length}</TableCell>
                                                    <TableCell>{luggage.weight}</TableCell>
                                                    <TableCell>{luggage.description}</TableCell>
                                                    <TableCell>{luggage.luggageType}</TableCell>
                                                    <TableCell>
                                                        <IconButton onClick={() => handleEditOpen(luggage, index)}>
                                                            <EditIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton onClick={() => deleteLuggage(index, luggage.id)}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            ) : (
                                <p>No hay equipaje</p>
                            )}
                        </div>
                    </Box>
                </Modal>
                <Modal open={editOpen} onClose={handleEditClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <div>
                            <h2>Editar Equipaje</h2>
                            {selectedLuggage && (
                                <form onSubmit={(e) => { e.preventDefault(); updateLuggage(selectedLuggage, editIndex); }}>
                                    <TextField
                                        label="Anchura"
                                        name="width"
                                        value={selectedLuggage.width}
                                        onChange={handleEditChange}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Altura"
                                        name="height"
                                        value={selectedLuggage.height}
                                        onChange={handleEditChange}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Longitud"
                                        name="length"
                                        value={selectedLuggage.length}
                                        onChange={handleEditChange}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Peso"
                                        name="weight"
                                        value={selectedLuggage.weight}
                                        onChange={handleEditChange}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Descripción"
                                        name="description"
                                        value={selectedLuggage.description}
                                        onChange={handleEditChange}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Tipo de Equipaje"
                                        name="luggageType"
                                        value={selectedLuggage.luggageType}
                                        onChange={handleEditChange}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <Button type="submit" variant="contained" color="primary">
                                        Guardar Cambios
                                    </Button>
                                </form>
                            )}
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default BaggageOptionsSection;

