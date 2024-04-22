import  { useState } from "react";
import { CalendarIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Square,
  FormControl,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
} from "@chakra-ui/react";

import styles from "./FilterNav.module.css";

export default function FilterNav() {
  const [salaryRange, setSalaryRange] = useState([0, 20000]);

  const handleSliderChange = (newValue) => {
    setSalaryRange(newValue);
  };

  return (
    <Box>
      <hr className={styles.hr}/>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p="20px"
        pl="40px"
        pr="40px"
        bg="#212121"
        color="#777"
      >
        <Flex alignItems="center">
          <Square border="1px solid grey" borderRadius="50%" p="8px">
            <SearchIcon fontSize="16px"></SearchIcon>
          </Square>
          <FormControl>
            <Select placeholder="Designer" border="none" size="sm">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
        </Flex>
        <Flex alignItems="center">
          <img src="img/location (1).png" alt="" width="30px" />
          <FormControl>
            <Select placeholder="Work Location" border="none" size="sm">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
        </Flex>
        <Flex alignItems="center">
          <CalendarIcon />
          <FormControl>
            <Select placeholder="Experience" border="none" size="sm">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
        </Flex>
        <div className={styles.sliderContainer}>
          <div className={styles.text}>
            <Text>Salary Range</Text>
            <Text>${salaryRange[0]}</Text>
            <Text>-</Text>
            <Text>${salaryRange[1]}</Text>
          </div>
          <div>
            <RangeSlider
              aria-label={["min", "max"]}
              colorScheme="pink"
              defaultValue={salaryRange}
              onChange={handleSliderChange}
              min={0}
              max={20000}
              w="100%"
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </div>
        </div>
      </Flex>
    </Box>
  );
}
