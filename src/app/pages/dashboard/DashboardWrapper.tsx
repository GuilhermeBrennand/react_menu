
import { FC } from 'react'
import { EnableSidebar } from '../../../_metronic/layout/core'
import { Toolbar } from '../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../_metronic/layout/components/Content'
import { MenuPage } from '../../modules/apps/menu/MenuPage'

const DashboardWrapper: FC = () => {
  // const intl = useIntl()
  return (
    <EnableSidebar>
      <Toolbar />
      <Content>
        <MenuPage />
      </Content>
    </EnableSidebar>
  )
}

export { DashboardWrapper }
