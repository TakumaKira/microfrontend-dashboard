import React, {Suspense} from "react"
const BarChart = React.lazy(() => import("barChart/Component"))

const App = () => {
  return (
    <div>
      <h1>Micro Frontend Dashboard</h1>
      <Suspense fallback={"loading..."}>
        <BarChart/>
      </Suspense>
    </div>
  )
}
export default App