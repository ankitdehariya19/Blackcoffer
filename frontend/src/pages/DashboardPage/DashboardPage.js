import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import BarChart from "../../components/Charts/BarChart"; 
import LineChart from "../../components/Charts/LineChart";
import PieChart from "../../components/Charts/PieChart";
import RadarChart from "../../components/Charts/RadarChart";
import LoadingSpinner from "../../components/elements/LoadingSpinner"; 
import apiService from "../../services/apiService"; 
import CustomDropdown from "../../components/elements/CustomDropdown";

const AVAILABLE_LABELS = [
  "source",
  "pestle",
  "sector",
  "topic",
  "country",
  "region",
];

const AVAILABLE_VALUES = [
  "averageIntensity",
  "relevance",
  "likelihood",
  "end_year",
  "start_year",
];

const DashboardPage = () => {
  const [aggregatedData, setAggregatedData] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState("sector");
  const [selectedValue, setSelectedValue] = useState("likelihood");
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.fetchData();
        const aggregatedData = aggregateDataByLabel(data, selectedLabel);
        setAggregatedData(aggregatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [selectedLabel, selectedValue, ]);

  // const handleLabelChange = (event) => {
  //   setSelectedLabel(event.target.value);
  // };

  // const handleValueChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  const aggregateDataByLabel = (data, label) => {
    const groupedData = {};
    data.forEach((item) => {
      const labelValue = item[label];
      if (!groupedData[labelValue]) {
        groupedData[labelValue] = { count: 0, sum: 0 };
      }

      if (selectedValue === "averageIntensity") {
        groupedData[labelValue].sum += item.intensity;
        groupedData[labelValue].count++;
      } else if (
        selectedValue === "relevance" ||
        selectedValue === "likelihood"
      ) {
        groupedData[labelValue].sum += item[selectedValue];
        groupedData[labelValue].count++;
      } else if (
        selectedValue === "start_year" ||
        selectedValue === "end_year"
      ) {
        const year = parseInt(item[selectedValue]);
        if (!isNaN(year)) {
          groupedData[labelValue].sum += year;
          groupedData[labelValue].count++;
        }
      } else {
        groupedData[labelValue].count++;
      }
    });

    const aggregatedData = Object.keys(groupedData).map((labelValue) => ({
      [label]: labelValue,
      [selectedValue]:
        selectedValue === "averageIntensity"
          ? (
              groupedData[labelValue].sum / groupedData[labelValue].count
            ).toFixed(2) 
          : groupedData[labelValue].sum, 
    }));

    return aggregatedData;
  };

  return (
    <div className="flex flex-col w-full min-h-screen max-h-full">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Header />
          <div className="flex  my-4 w-full  justify-start m-4 pb-10 ">
            <div className="flex justify-center items-center">
              <label htmlFor="labelDropdown" className="mr-2">
                Select Label:
              </label>
              <CustomDropdown
                options={AVAILABLE_LABELS}
                selectedOption={selectedLabel}
                setSelectedOption={setSelectedLabel}
              />
            </div>

            <div className="flex justify-center items-center">
              <label htmlFor="valueDropdown" className="ml-4 mr-2">
                Select Value:
              </label>
              <CustomDropdown
                options={AVAILABLE_VALUES}
                selectedOption={selectedValue}
                setSelectedOption={setSelectedValue}
              />
            </div>
          </div>
          <div className="  flex flex-col">
            <div className="flex">
              <div className="w-8/12 h-fit  m-4 p-4">
                <BarChart
                  data={aggregatedData}
                  label={selectedLabel}
                  value={selectedValue}
                />
              </div>
              <div className="w-4/12 h-fit  m-4 p-4">
                <PieChart
                  data={aggregatedData}
                  label={selectedLabel}
                  value={selectedValue}
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-8/12 h-fit  m-4 p-4">
                <LineChart
                  data={aggregatedData}
                  label={selectedLabel}
                  value={selectedValue}
                />
              </div>
              <div className="w-4/12 h-fit  m-4 p-4">
                <RadarChart
                  data={aggregatedData}
                  label={selectedLabel}
                  value={selectedValue}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
