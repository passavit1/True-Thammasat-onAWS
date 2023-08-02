import React, { useState, useEffect } from "react";
import { Nav } from "../../components/index";
import tablet from "../../items/data/tablet.json";
import promotion from "../../items/data/promotion.json";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  margin-top: 10px;

  .slick-slide {
    padding: 10px;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      scale: 1.1;
    }
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }
`;

const StyledCardContainer = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 60vh;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
    align-items: center;
  }
`;

const StyledCard = styled.div`
  border: 1px solid #dedbd5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
  width: 25%;
  // height: 45%;

  @media screen and (max-width: 450px) {
    width: 70%;
    // background-color: blue;
  }
`;

const StyledImage = styled.img`
  width: 60%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 10px;

  @media screen and (max-width: 450px) {
    scale: 1 !important;
  }
`;

const StyledTable = styled.table`
  width: 90%;
  border-collapse: collapse;
  color: red;

  th,
  td {
    border: 1px solid #dedbd5;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #dedbd5;
  }
`;

const StyledTableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Compare = () => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [filteredPromotions, setFilteredPromotions] = useState([]);
  const [selectedModel, setModel] = useState("ipad-air5");

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = tablet.flatMap((model) =>
        model.imageURLs.map((url) =>
          import(`../../items/pic/${model.name}/${url}`)
            .then((image) => ({ default: image.default }))
            .catch(() => ({ default: null }))
        )
      );

      const images = await Promise.all(imagePromises);
      setLoadedImages(images);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    setFilteredPromotions([]);

    const filteredModel = promotion.find((item) => item.name === selectedModel);

    console.log(filteredModel);

    const promotions =
      filteredModel?.model.find((m) => m.model === selectedStorage)?.choice ||
      [];

    console.log(promotions);

    setFilteredPromotions(promotions);
  }, [selectedModel, selectedStorage]);

  return (
    <div>
      <Nav />
      <StyledCardContainer>
        {tablet.map((model, index) => (
          <StyledCard key={model.id}>
            <h2>{model.name}</h2>
            <StyledSlider>
              {model.imageURLs.map((_, i) => {
                const image = loadedImages[index * 12 + i];
                if (!image || !image.default) {
                  return null;
                }
                return (
                  <div key={i}>
                    <StyledImage src={image.default} alt={model.name} />
                  </div>
                );
              })}
            </StyledSlider>
            <p>Price: ${model.price}</p>
            <p>Promotion: {model.promotion}</p>
            <p>Storage: {model.storage}</p>
            <p>RAM: {model.ram}</p>
            <p>Display: {model.display}</p>
            <p>Camera: {model.camera}</p>
            <button
              onClick={() => {
                setSelectedStorage("256GB");
                setModel(model.name);
              }}
            >
              256GB
            </button>
            <button
              onClick={() => {
                setSelectedStorage("64GB");
                setModel(model.name);
              }}
            >
              64GB
            </button>
          </StyledCard>
        ))}
      </StyledCardContainer>

      <StyledTableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Model Name</th>
              <th>RRP</th>
              <th>RC</th>
              <th>Total Paid (At that day)</th>
              <th>Total Paid (All Contract)</th>
            </tr>
          </thead>
          <tbody>
            {filteredPromotions.length > 0 ? (
              filteredPromotions.map((choice) => (
                <tr key={choice.id}>
                  <td>{selectedModel + " " + selectedStorage}</td>
                  <td>{choice.rrp}</td>
                  <td>{choice.rc}</td>
                  <td>{choice.ttlPaid}</td>
                  <td>{choice.ttlPaidAll}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </StyledTableContainer>
    </div>
  );
};

export default Compare;
