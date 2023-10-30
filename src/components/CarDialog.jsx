import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

function CarDialog({car, handleChange}) {

    
    const handleChange = (newValue, carProps) => {
        setCar({... cars, carProps: newValue});
     }
    return(
        <DialogContent>
        <TextField
          margin="dense"
          label="Brand"
          fullWidth
          variant="standard"
          value={car.brand}
          onChange={event => setCar({...car, brand: event.target.value})}
        />
        <TextField
          margin="dense"
          label="Model"
          fullWidth
          variant="standard"
          value={car.model}
          onChange={event => setCar({...car, model: event.target.value})}
        />
        <TextField
          margin="dense"
          label="Color"
          fullWidth
          variant="standard"
          value={car.color}
          onChange={event => setCar({...car, color: event.target.value})}
        />
        <TextField
          margin="dense"
          label="Fuel"
          fullWidth
          variant="standard"
          value={car.fuel}
          onChange={event => setCar({...car, fuel: event.target.value})}
        />
        <TextField
          margin="dense"
          label="Year"
          fullWidth
          variant="standard"
          value={car.year}
          onChange={event => setCar({...car, year: event.target.value})}
        />
        <TextField
          margin="dense"
          label="Price"
          fullWidth
          variant="standard"
          value={car.price}
          onChange={event => setCar({...car, price: event.target.value})}
        />
      </DialogContent>
    )
    

}
export default CarDialog;