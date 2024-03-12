import axios from "axios";
import { Button, Heading, Img, Slider, Text } from "components";
import Header1 from "components/Header";
import SignUpInputfield from "components/SignUpInputfield";
import React, { useState } from "react";

const index = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [ISBN, setISBN] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [avatar, setAvatar] = useState(null);

  const bodybook = {
    title,
    author,
    genre,
    publicationYear,
    ISBN,
    avatar,
  };

  const BEARER_TOKEN = localStorage.getItem("accessToken");

  const axiosConfig = {
    headers: {
      Authorization: `${BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const book = await axios.post(
        "http://localhost:8000/api/v1/books/add",
        bodybook,
        axiosConfig
      );

      alert(book.data.message);
      // Reset the input fields after adding the book
      setTitle("");
      setAuthor("");
      setGenre("");
      setPublicationYear("");
      setISBN("");
      setPublisher("");
      setAvatar(null);
      // You can add any additional logic or feedback here
      console.log("Book added successfully!");
    } catch (error) {
      alert(error);
      alert("Something Went Wrong!");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    const reader = new FileReader();

    reader.onloadend = () => {
      // Once the file is loaded, set the image state with the result
      setAvatar(reader.result);
    };

    if (file) {
      // Read the uploaded file as a data URL
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <Header1 className="flex flex-row justify-center items-center w-full p-[22px] bg-gray-100" />
          <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 bg-yellow-100 max-w-7xl rounded-[20px]">
            <Text
              as="p"
              className="mt-[5px] ml-2.5 !text-black-900_02 !font-medium"
            >
              Home | Courses
            </Text>
            <div className="flex flex-row justify-between items-center w-[99%] ml-2.5 gap-[436px]">
              <Heading size="2xl" as="h1" className="w-[33%]">
                Educatsy Courses
                <br />
                For All Standards
              </Heading>
              <div className="h-[210px] w-[32%] relative">
                <div className="h-3.5 w-full bottom-[1%] right-0 left-0 m-auto bg-black-900_cc backdrop-opacity-[0.5] blur-[81.00px] absolute rounded-[50%]" />
                <Img
                  src="images/img_image_210x374.png"
                  alt="image_one"
                  className="justify-center h-[210px] w-[97%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-row justify-start w-[32%] left-[7%] top-0 m-auto absolute">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col w-full gap-px">
                      <div className="flex flex-row justify-center items-center w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-2 !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[5px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="ml-[7px] !text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between items-center w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-deep_orange-400 !font-airbnbcerealapp text-center !text-[12.61px]"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center m-auto mt-10 w-full gap-[5px] p-5 bg-yellow-100 max-w-7xl rounded-[20px]">
        {/* Your existing JSX code */}
        <div className="flex flex-row justify-between items-center w-full">
          {/* Your existing JSX code */}
          <div className="flex flex-col items-center justify-start m-auto w-[42%]">
            <div className="flex flex-col w-full gap-5">
              {/* Input fields for adding a new book */}
              <SignUpInputfield
                name="title"
                email="Title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <SignUpInputfield
                name="author"
                email="Author"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <SignUpInputfield
                name="genre"
                email="Genre"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />

              <SignUpInputfield
                name="price"
                email="Price"
                placeholder="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <SignUpInputfield
                name="image"
                type="file"
                email="Image"
                placeholder="Upload Image"
                onChange={(e) => handleImageUpload(e)}
              />
              <SignUpInputfield
                name="publicationYear"
                email="Publication Year"
                placeholder="Publication Year"
                value={publicationYear}
                type="number"
                onChange={(e) => setPublicationYear(e.target.value)}
              />
              <SignUpInputfield
                name="ISBN"
                email="ISBN"
                placeholder="ISBN"
                value={ISBN}
                onChange={(e) => setISBN(e.target.value)}
              />
              <SignUpInputfield
                name="publisher"
                email="Publisher ID"
                placeholder="Publisher ID"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
              {/* Button to add a new book */}
              <Button
                onClick={(e) => handleAddBook(e)}
                className="w-full font-medium rounded-[10px]"
              >
                Add Book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
