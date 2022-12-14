//dynamic routing
import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react'
import { MdBedroomParent, MdBathtub } from 'react-icons/md'
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from 'react-icons/go';
import millify from "millify";
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';



const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID, description, type, purpose, furnishingStatus, amenities, photos } }) => {

  return (
    <Box maxWidth="1000px" margin="auto" p="4">

      {photos && <ImageScrollbar data={photos} />}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
        {rooms} <MdBedroomParent />| {baths}  <MdBathtub />|
          {millify(area)} sqft <BsGridFill />
        </Flex>
        <Box margin="2">
          <Text fontSize="lg" marginBottom="2" fontWeight="bold">{title} </Text>
          <Text lineHeight="2" color="gray.600"> {description}</Text>
        </Box>
        <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
          <Flex justifyContent="space-between" w="400px">
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex justifyContent="space-between" w="400px">
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {/* if there is furnishing satus */}
          {furnishingStatus && (
            <Flex justifyContent="space-between" w="400px">
              <Text>Furnishing Status</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
          <Box>
          {/* if amenity exists */}
            {amenities.length && <Text fontSize="2xl" fontWeight="black" marginTop="5">Amenities</Text> }
            <Flex flexWrap="wrap">
               {amenities.map((item) => (
                item.amenities.map((amenity) => (
                <Text 
                fontWeight="bold" 
                color="blue.400"
                fontSize="l"
                p="2"
                bg="gray.200"
                m="1"
                borderRadius="5"
                key={amenity.text}>{amenity.text}</Text>
                ))
               ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);


  return {
    props: {
      propertyDetails: data
    }
  }
}