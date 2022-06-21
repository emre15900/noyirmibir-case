import React from 'react'
import styles from "./styles.module.css"
import { Box, Text, Flex } from "@chakra-ui/react";
import Card from '../Cards/Card';

function Products() {
  return (
    <div>
        <Box as="h1">
        Featured Products
        </Box>
        <Flex>
            <Box>
                <Card />
            </Box>
        </Flex>
    </div>
  )
}

export default Products