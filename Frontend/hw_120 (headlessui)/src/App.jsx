import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export default function App() {
  return (
    <div>
        <TabGroup>
            <TabList>
                <Tab>GOA</Tab>
                <Tab>About GOA</Tab>
                <Tab>Contact</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>GOA BEST</TabPanel>
                <TabPanel>GOA IS BEST CODING ACADEMY</TabPanel>
                <TabPanel>CONTACT US FROM FACEBOOK</TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
  )
}
