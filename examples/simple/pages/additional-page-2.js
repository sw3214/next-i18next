import PropTypes from 'prop-types'
// import { withTranslation, Link } from '../i18n'
import { withTranslation, Link } from '../i18n-add2'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AdditionalPage = ({ t }) => (
  <>
    <main>
      <Header title={t('h1')} />
      <h3>... {t('additional-page:add-key')}(additional-page:add-key)...</h3>
      <h3>... {t('add-key')}(add-key)...</h3>
      <Link href='/'>
        <button
          type='button'
        >
          {t('back-to-home')}
        </button>
      </Link>
    </main>
    <Footer />
  </>
)

AdditionalPage.getInitialProps = async () => ({
  namespacesRequired: ['additional-page', 'footer'],
})

AdditionalPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('additional-page')(AdditionalPage)
