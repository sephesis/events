<? 

namespace App\Tools\Web;

class Request
{
    public function __construct()
    {
        
    }

    public function isPost()
    {
        return $_SERVER['REQUEST_METHOD'] == 'POST';
    }

    public function getPostList()
    {
        
    }

    public function getParam()
    {

    }
}