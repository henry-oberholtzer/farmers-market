# Farmers Market React App

A basic stateful React.js app by Grant Abel, Ravin Fisher, Henry Oberholtzer

# Component Diagram

- App
    - Header
    - Body
        - InformationColumn
            * Produce Availability
            * monthToRender state
            - SelectComponent
                * Options (Months of the year)
                * CallbackFunction (display produce list)
            - ProduceComponent
                - ProduceListComponent
        - InformationColumn
            * Location by Day
            * dayToRender state
            - SelectComponent
                * Options (Days of the week)
                * CallbackFunction (display location by day)
            - LocationComponent
                * Location Name
                * Hours
                * Booth Location