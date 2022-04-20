import axios from "axios";
import { useEffect } from "react";
import { GifImage, Header } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addGif } from "../../store/gifSlice";

export default function TrendingPage() {
  const apiKey =
    process.env.REACT_APP_GIPHY_API || "jYPiaqlS3ryNTKLPNQZkThcsxw2SqKDC";
  const data = useSelector((state) => state.gifData);

  // Redux
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
      .then((res) => {
        dispatch(addGif({ gif_data: res.data.data }));
      })
      .catch((err) => alert(err));
  }, [apiKey, dispatch]);

  return (
    <div>
      <Header />
      <h1>Trending Page</h1>

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
