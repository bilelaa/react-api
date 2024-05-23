
import { Card, CardHeader, CardBody, Heading ,Stack,StackDivider,Text,Box } from '@chakra-ui/react'

function User({user}) {
  console.log(user);
 

  return (
    
    <div style={{margin:"15px"}}><Card>
    <CardHeader>
      <Heading size='md'>{user?.name}</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Adresse
          </Heading>
          <Text pt='2' fontSize='sm'>
            City  : {user.address.city}
          </Text>
          <Text pt='2' fontSize='sm'>
          street  : {user.address.street}
            </Text> <Text pt='2' fontSize='sm'>
            suite : {user.address.suite}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
          company
          </Heading>
          <Text pt='2' fontSize='sm'>
          name : {user.company.name}
          </Text>
          <Text pt='2' fontSize='sm'>
          name : {user.company.catchPhrase}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            contact
          </Heading>
          <Text pt='2' fontSize='sm'>
          email : {user.email}
                    </Text>
                    <Text pt='2' fontSize='sm'>
          phone : {user.phone}
                    </Text>
                    <Text pt='2' fontSize='sm'>
          website : {user.website}
                    </Text>
        </Box>
      </Stack>
    </CardBody>
  </Card></div>
  )
}

export default User