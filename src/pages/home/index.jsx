import axios from "axios";
import { useState } from "react";
import { GifImage, SearchBar, Header } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addGif } from "../../store/gifSlice";

export default function Home() {
  const apiKey =
    process.env.REACT_APP_GIPHY_API || "jYPiaqlS3ryNTKLPNQZkThcsxw2SqKDC";
  const data = useSelector((state) => state.gifData);
  const [formData, setFormData] = useState({
    query: "",
    rating: ""
  });

  // Redux
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q='${formData.query}'&rating='${formData.rating}'&limit=12&api_key=${apiKey}&limit='12'`
      )
      .then((res) => {
        console.log(res.data.data[1]);
        dispatch(addGif({ gif_data: res.data.data }));
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <Header />
      {/* <NavBar /> */}
      <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
      <div className="gif-list">
        {data.gifData?.map((data) => (
          <GifImage
            key={data.id}
            {...data}
            imageUrl={data.images?.original.url}
          />
        ))}
      </div>
    </div>
  );
}
