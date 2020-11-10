import React,{Component} from 'react';
// import { Divider } from 'antd';
import HeadNav from '../../components/HeadNav'
import Footer from '../../components/Footer'
import { Route } from 'react-router-dom'
import Home from '../../routers/Home/Home';
import File from '../../routers/File/File';
import Share from '../../routers/Share/Share';
import Mine from '../../routers/Mine/Mine';
export default class DefaultLayout extends Component {
    render() {
        return (
            <div id="DefalutLayout">
                <HeadNav />
                <div className="contentBox">
                    <Route path={this.props.match.url+'/'} component={Home} exact />
                    {/* 通过this.props.match.url获取原有的路径 再它后面加上我们赋予他的的不同路径 */}
                    <Route path={this.props.match.url+'/File'} component={File} />
                    <Route path={this.props.match.url+'/Share'} component={Share} />
                    <Route path={this.props.match.url+'/Mine'} component={Mine} />
                </div>
                <Footer />
            </div>
        )
    }
}