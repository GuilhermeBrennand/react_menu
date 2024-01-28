
import { FC } from 'react'
import { EnableSidebar } from '../../../_metronic/layout/core'
import { Toolbar } from '../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../_metronic/layout/components/Content'

const DashboardWrapper: FC = () => {
  // const intl = useIntl()
  return (
    <EnableSidebar>
      <Toolbar />
      <Content>

      </Content>
    </EnableSidebar>
  )
}

export { DashboardWrapper }
