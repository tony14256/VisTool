import { connect } from 'react-redux';
import StartPage from '../../components/StartPage';

import MetroStation from '../../MetroStation'

import {
  loadFile,
  changeFileName,
  dataHandle,
  loadMetroMap
} from '../../actions';

export default connect(
  (state) => ({
    filename: state.getIn(['vis', 'file_name']),
    content: state.getIn(['vis', 'content'])
  }),
  (dispatch) => ({

    onLoadFile: (name) => {
      console.log(name)
      let filereader = new FileReader();
      filereader.onload = function () {
        //const context = JSON.parse(filereader.result);
        const context = (filereader.result);

        //console.log(context);
        dispatch(loadFile(context));
      }
      filereader.readAsText(name)

    },
    onChangeFileName: (e) => {
      //console.log(e.target.files[0])
      dispatch(changeFileName(e.target.files[0]))
    },
    onDataHandle: (data) => {
      console.log(data)
      dispatch(dataHandle(data));
      dispatch(loadMetroMap(MetroStation.data));
    },
    
  })
)(StartPage);