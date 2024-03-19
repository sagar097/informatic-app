import { Grid } from '@mui/material'
import PieChart from '../components/PieChart/PieChart'
import StackChart from '../components/StackChart/StackChart'
import SequenceChart from '../components/SequenceChart/SequenceChart'

function Dashboard() {
  return (
    <Grid container spacing={2}>

      <Grid item xs={8} sm={8} md={8} lg={4}>
        <PieChart />
      </Grid>

      <Grid item xs={8} sm={8} md={8} lg={4}>
        <SequenceChart />
      </Grid>

      <Grid item xs={8} sm={8} md={8} lg={4}>
        <StackChart />
      </Grid>

    </Grid>
  )
}

export default Dashboard