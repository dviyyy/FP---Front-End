/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable radix */
import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createListProduct } from '../../../redux/actions/createProduct';
import NavbarProduct from '../../Organisms/Navbar/NavbarProduct';
import ProductInput from '../../Moleculs/Form/ProductInput';
import './TemplateProduct.Module.css';

function TemplateProduct() {
  const params = useParams();
  console.log(`${params.id}`);
  // Data Input Product
  const [inputName, setInputName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  // Upload Image
  const [image, setImage] = useState([]);
  const [uploadedFileURL, setUploadedFileURL] = useState([]);
  const dispatch = useDispatch();

  let fileObj = [];

  const {
    productLoading,
    productResult,
    productError,
  } = useSelector((state) => { return state.getProductReducer; });

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      name: inputName,
      price: parseInt(price),
      description,
      categoryId: parseInt(categoryId),
    };
    await dispatch(createListProduct(image, body));
  }

  const handleChangeImage = (e) => {
    fileObj.push(e.target.files);
    setMessage(false);
    let sum = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < fileObj.length; i++) {
      sum += fileObj[i].length;
    }

    if (sum > 4) {
      setMessage(true);
      fileObj = [];
      setImage([]);
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < fileObj[0].length; i++) {
        image.push(fileObj[0][i]);
      }
      setImage(image);
    }
    console.log(fileObj);
    console.log(image);
    // setImage(e.target.value);
  };

  useEffect(() => {
    if (productLoading) {
      setLoading(true);
    } else if (productResult) {
      setLoading(false);
      window.location.reload();
      console.log(productResult);
    } else if (productError) {
      console.log(productError);
    }
  });

  if (productResult) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <NavbarProduct />
      <div>
        <Container fluid className="form-products p-0">
          <form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <div style={{ paddingTop: '30px' }}>
                  <Link to="/" style={{ color: 'black' }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </Link>
                </div>
                <ProductInput
                  name={setInputName}
                  price={setPrice}
                  categoryId={setCategoryId}
                  description={setDescription}
                />
                <Form.Group className="mb-3" controlId="productPhoto">
                  <Form.Label>Foto Produk</Form.Label>
                  {image && image.map(({ images, index }) => {
                    return (
                      <img src={images} key={index} alt="" />
                    );
                  })}
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleChangeImage}
                    className="upload-button"
                    multiple
                  />
                  {message && (
                  <div className="alert alert-danger" role="alert">
                    Upload Maximum 4 Images!
                  </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xs={6}>
                <Link to={`/seller/product/${params.id}`}>
                  <Button variant="primary" className="preview-button" type="submit">
                    Preview
                  </Button>
                </Link>
              </Col>
              <Col xs={6}>
                <Button variant="primary" className="publish-button" type="submit">
                  Terbitkan
                  {loading && (
                    <span className="spinner-border spinner-border-sm me-5" />
                  )}
                </Button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </>
  );
}

export default TemplateProduct;
