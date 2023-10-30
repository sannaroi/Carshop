import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddCar({ fetchCars }) {
  const [car, setCar] = useState({
    brand: '',
    model: '',
    fuel: '',
    color: '',
    year: '',
    price: ''
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveCar = () => {
    fetch('https://carrestapi.herokuapp.com/cars', {
      method: 'POST',
      headers: { 'Content-type':'application/json' },
      body: JSON.stringify(car) 
    })
    .then(response => {
      if (!response.ok)
        throw new Error("Error when adding car: "  + response.statusText);

      fetchCars();
    })
    .catch(err => console.error(err));

    handleClose();
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Car</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Brand"
            fullWidth
            variant="standard"
            value={car.brand}
            onChange={e => setCar({...car, brand: e.target.value})}
          />
          <TextField
            margin="dense"
            label="Model"
            fullWidth
            variant="standard"
            value={car.model}
            onChange={e => setCar({...car, model: e.target.value})}
          />
          <TextField
            margin="dense"
            label="Color"
            fullWidth
            variant="standard"
            value={car.color}
            onChange={e => setCar({...car, color: e.target.value})}
          />
          <TextField
            margin="dense"
            label="Fuel"
            fullWidth
            variant="standard"
            value={car.fuel}
            onChange={e => setCar({...car, fuel: e.target.value})}
          />
          <TextField
            margin="dense"
            label="Year"
            fullWidth
            variant="standard"
            value={car.year}
            onChange={e => setCar({...car, year: e.target.value})}
          />
          <TextField
            margin="dense"
            label="Price"
            fullWidth
            variant="standard"
            value={car.price}
            onChange={e => setCar({...car, price: e.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveCar}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}