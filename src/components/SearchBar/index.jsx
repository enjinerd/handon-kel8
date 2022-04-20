import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

export default function SearchBar({ handleSubmit, handleChange }) {
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label htmlFor="query">
        <strong>Title</strong>
      </label>
      <TextField
        id="query"
        name="query"
        placeholder="Search..."
        onChange={handleChange}
        label="Search Gif"
        required
        variant="outlined"
        size="small"
      />

      {/* <input
        id="query"
        type="text"
        name="query"
        placeholder="Search..."
        onChange={handleChange}
        required
      /> */}
      <InputLabel id="rating-label">Rating</InputLabel>

      <Select
        labelId="rating-label"
        id="rating"
        name="rating"
        label="Rating"
        onChange={handleChange}
        size="small"
      >
        <MenuItem value={"g"}>General</MenuItem>
        <MenuItem value={"pg"}>Parental Guide</MenuItem>
      </Select>
      <Button type="submit">Search</Button>
    </form>
  );
}
