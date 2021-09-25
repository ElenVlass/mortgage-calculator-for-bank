import { connect } from 'react-redux';
import BankList from './BankList';
import { bankOperations, bankSelectors } from '../../redux/banks';

const mapStateToProps = state => ({
  list: bankSelectors.getAllBanks(state),
  isLoading: bankSelectors.getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(bankOperations.deleteBank(id)),
  onEdit: id => dispatch(bankOperations.updateBank(id)),
  fetchBanks: () => dispatch(bankOperations.fetchBanks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankList);
